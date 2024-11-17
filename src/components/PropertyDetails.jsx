import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPropertyDetails } from "../redux/slices/propertiesSlice";
import { Spin, Result, Slider, Carousel, Button } from "antd";
import { EnvironmentOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "../styles/PropertyDetails.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle back button click
  const handleBackClick = () => {
    navigate(-1);
  };

  const { propertyDetails, properties, loading, error } = useSelector(
    (state) => state.properties
  );

  const filteredProperties = properties.filter(
    (property) => property.id !== propertyDetails.id
  );

  useEffect(() => {
    console.log("id", id);
    if (id) {
      dispatch(fetchPropertyDetails(id));
    }
  }, [dispatch, id]);

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
        <Spin tip="Loading" size="large">
          Loading property details...
        </Spin>
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
      {/* Back Button */}
      <Button className="back-button" onClick={handleBackClick}>
        &#8592; Back
      </Button>

      {/* Search and Filters Section */}
      <div className="search-filters">
        <div className="location-picker">
          <p>Pick a location</p>
          <span>Where are you going to?</span>
        </div>
        <div className="date-picker">
          <p>Add dates</p>
          <span>Check In - Check Out Dates</span>

        </div>
        <div className="guest-picker">
          <p>Add guests</p>
          <span>Number of guests</span>

        </div>
        <button className="search-button">🔍</button>
      </div>

      <div className="main-content-container">
        {/* Image Slider using Ant Design Carousel */}
        <div className="image-slider">
          <Carousel autoplay>
            {propertyDetails?.propertyImages?.map((image, index) => (
              <div key={index}>
                <img
                  src={image.images.url}
                  alt={`Property Image ${index}`}
                  className="property-image"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Property Details Section */}
        <div className="property-details">
          <h1>{propertyDetails.name}</h1>
          <p>{propertyDetails.description}</p>
          <div className="property-location">
            <EnvironmentOutlined style={{ marginRight: 4 }} />
            {`${propertyDetails?.address?.country}, ${propertyDetails?.address?.city}`}
          </div>
        </div>
      </div>

      {/* Other Properties Section */}
      <div className="other-properties">
        <h2>Other Properties You Might Like</h2>
        <div className="other-properties-list">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="other-property-item"
              onClick={() => navigate(`/details/${property.id}`)}
            >
              <img
                src={property.propertyImages[0]?.images.url}
                alt={property.name}
                className="other-property-image"
              />
              <div className="other-property-info">
                <h3>{property.name}</h3>
                <p>{property.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
