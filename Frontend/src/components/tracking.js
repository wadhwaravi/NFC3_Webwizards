// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Heading,
  Button,
  Textarea,
  VStack,
  List,
  ListItem,
} from "@chakra-ui/react";

// Order Tracking Component
const OrderTracking = ({ orderId }) => {
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/orders/${orderId}`)
      .then((response) => setOrderStatus(response.data))
      .catch((error) => console.error(error));
  }, [orderId]);

  return (
    <Box>
      <Heading as="h2">Order Status</Heading>
      {orderStatus ? (
        <VStack align="start">
          <Text>Status: {orderStatus.status}</Text>
          <Text>Estimated Delivery: {orderStatus.estimatedDelivery}</Text>
        </VStack>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

// Inventory Component
const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get("/api/inventory")
      .then((response) => setInventory(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box>
      <Heading as="h2">Inventory</Heading>
      <List spacing={3}>
        {inventory.map((item) => (
          <ListItem key={item.id}>
            {item.name}: {item.stock} in stock
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

// Order History Component
const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/api/orders/user")
      .then((response) => setOrders(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box>
      <Heading as="h2">Order History</Heading>
      <List spacing={3}>
        {orders.map((order) => (
          <ListItem key={order.id}>
            Order {order.id}: {order.status}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

// Shipment Tracking Component
const ShipmentTracking = ({ trackingNumber }) => {
  const [shipment, setShipment] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/shipments/${trackingNumber}`)
      .then((response) => setShipment(response.data))
      .catch((error) => console.error(error));
  }, [trackingNumber]);

  return (
    <Box>
      <Heading as="h2">Shipment Tracking</Heading>
      {shipment ? (
        <VStack align="start">
          <Text>Status: {shipment.status}</Text>
          <Text>Estimated Delivery: {shipment.estimatedDelivery}</Text>
          <Text>Current Location: {shipment.currentLocation}</Text>
        </VStack>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

// Analytics Dashboard Component
const AnalyticsDashboard = () => {
  const [salesData, setSalesData] = useState({});
  const [customerInsights, setCustomerInsights] = useState({});

  useEffect(() => {
    axios
      .get("/api/analytics/sales")
      .then((response) => setSalesData(response.data))
      .catch((error) => console.error(error));

    axios
      .get("/api/analytics/customers")
      .then((response) => setCustomerInsights(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box>
      <Heading as="h2">Analytics Dashboard</Heading>
      <Heading as="h3">Sales Data</Heading>
      <pre>{JSON.stringify(salesData, null, 2)}</pre>
      <Heading as="h3">Customer Insights</Heading>
      <pre>{JSON.stringify(customerInsights, null, 2)}</pre>
    </Box>
  );
};

// Feedback Component
const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    axios
      .post("/api/feedback", { feedback })
      .then((response) => alert("Feedback submitted"))
      .catch((error) => console.error(error));
  };

  return (
    <Box>
      <Heading as="h2">Submit Feedback</Heading>
      <Textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <Button onClick={handleSubmit} mt={4}>
        Submit
      </Button>
    </Box>
  );
};

// GeoTracking Component
const GeoTracking = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("/api/locations")
      .then((response) => setLocations(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box>
      <Heading as="h2">Delivery Locations</Heading>
      <List spacing={3}>
        {locations.map((location) => (
          <ListItem key={location.id}>
            {location.name}: {location.address}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

// Main App Component
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route
            path="/order-tracking/:orderId"
            element={<OrderTracking orderId="12345" />}
          />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route
            path="/shipment-tracking/:trackingNumber"
            element={<ShipmentTracking trackingNumber="TRACK123" />}
          />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/geotracking" element={<GeoTracking />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
