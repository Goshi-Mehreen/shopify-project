import React from "react";
import Layout from "./Component/Layout";
import { Routes, Route } from "react-router-dom";
import { VedioGeneratorMain } from "./Component/VedioGeneratorMain";
import SubscriptionPlan from "./Component/SubscriptionPlan";
import MainContent from "./Component/MainContent";




function App() {
  return (
    
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<MainContent />} />
    <Route path="/generate-video" element={<VedioGeneratorMain />} />
    <Route path="/subscription-plan" element={<SubscriptionPlan />} />
  </Route>
</Routes>

  );
}

export default App;
