import React, { useEffect, useRef, useState } from 'react';
import { fetchCatcha, fetchCardDetaile } from '../../http';

const RationCardVerify = () => {
  const [loadingCapcha, setLoaingCapcha] = useState({
    sessionId: '',
    image: '',
  });
  const [rationData, setRationData] = useState({});
  const [loading, setLoading] = useState(false); // Initially not loading
  const [error, setError] = useState(false);

  const capcha = useRef();

  useEffect(() => {
    async function loadCapcha() {
      const response = await fetchCatcha();
      console.log("hi there")
      setLoaingCapcha((pre) => ({
        ...pre,
        image: response.image, // Ensure this is a valid image URL or base64 string
        sessionId: response.sessionId,
      }));
    }
    loadCapcha();
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true); // Start loading when submit is clicked
      const response = await fetchCardDetaile({
        sessionId: loadingCapcha.sessionId,
        rationCardNumber: localStorage.getItem('ration_number'),
        captcha: capcha.current.value,
      });
      setRationData({ ...response });
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };

  return (
    <div>
      <h1>Ration Card Verification</h1>
      {loadingCapcha.image ? (
        <div>
          <img src={loadingCapcha.image} alt="Captcha" />
          <div>
            <label htmlFor="captcha">Enter Captcha:</label>
            <input type="text" id="captcha" ref={capcha} />
          </div>
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      ) : (
        <p>Loading captcha...</p>
      )}
      {error && <p style={{ color: 'red' }}>Error occurred while verifying the ration card.</p>}
      {Object.keys(rationData).length > 0 && !loading && (
        <div>
          <h2>Ration Card Details</h2>
          <pre>{JSON.stringify(rationData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RationCardVerify;
