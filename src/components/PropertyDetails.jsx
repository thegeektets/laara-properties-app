import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPropertyDetails } from "../redux/slices/propertiesSlice";
import { Spin, Result } from "antd";
import { EnvironmentOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "../styles/PropertyDetails.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { propertyDetails, loading, error } = useSelector(
    (state) => state.properties
  );

  useEffect(() => {
    console.log("id", id);
    if (id) {
      dispatch(fetchPropertyDetails(id));
    }
  }, []);

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          width: "100vw",
          marginTop: "20vh",
        }}
      >
        <Spin tip="Loading property details..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <Result
        style={{
          textAlign: "center",
          height: "100vh",
          width: "100vw",
          marginTop: "20vh",
        }}
        status="error"
        icon={
          <CloseCircleOutlined style={{ color: "red", fontSize: "48px" }} />
        }
        title="Error"
        subTitle="Failed to load property details. Please try again."
      />
    );
  }

  if (!propertyDetails) {
    return <div>No property details available.</div>;
  }

  // Display property details
  return (
    <div className="property-details-container">
              <h2>Popular Destinations</h2>

      <h1>{propertyDetails.name}</h1>
      <p>{propertyDetails.description}</p>
      <div className="property-location">
        <EnvironmentOutlined style={{ marginRight: 4 }} />
        {`${propertyDetails.address.country}, ${propertyDetails.address.city}`}
      </div>
      <img
        src={propertyDetails.propertyImages[0]?.images.url}
        alt={propertyDetails.name}
        className="property-image"
      />
      {/* Add more details as needed */}
    </div>
  );
};

export default PropertyDetails;
