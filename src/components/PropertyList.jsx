import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { fetchProperties } from "../redux/slices/propertiesSlice";
import "../styles/PropertyList.css";
import { Spin, Result, Button } from "antd";
import { CloseCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";

const PropertyList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { properties, loading, error } = useSelector(
    (state) => state.properties
  );

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  if (loading)
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
          Loading properties ...
        </Spin>
      </div>
    );
  if (error)
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
        title="Oops! Something went wrong."
        subTitle="There was an issue fetching the properties. Please try again."
        extra={
          <Button type="primary" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        }
      />
    );

  return (
    <div className="destinations-picks-container">
      <h2>Popular Destinations</h2>
      <div className="destinations-grid">
        {properties.map((property, index) => (
          <div className="destination-card" key={index}>
            <img
              src={property.propertyImages[0].images.url}
              alt={property.name}
              className="destination-image"
            />
            <div className="destination-info">
              <h3>{property.name}</h3>
              <p>{property.description}</p>
              <p>
                <EnvironmentOutlined style={{ marginRight: 4 }} />
                {`${property.address.country}, ${property.address.city}`}
              </p>
              <button
                className="see-more-button"
                onClick={() => navigate(`/details/${property.id}`)}
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
