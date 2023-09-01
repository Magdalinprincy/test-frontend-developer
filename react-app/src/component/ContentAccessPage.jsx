import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../bg.jpg';

const ContentAccessPage = ({ selectedPlan }) => {
  return (
    <div className="content-access-page">
      <h1 className="text-primary">Content Access Page</h1>
      <h2 className="h4">Videos</h2>
      <div className="d-flex">
        <img
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
        />
        <img
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
          srcset=""
        />
        <img
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
          srcset=""
        />
      </div>
      <p className="h4">
        List of videos related to the {selectedPlan} plan goes here...
      </p>

      <div className="d-flex">
        <Image
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
        />
        <Image
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
          srcset=""
        />
        <Image
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
          srcset=""
        />
      </div>
      <h2 className="h4">Guide eBooks</h2>

      <div className="d-flex">
        <Image
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
        />
        <Image
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
          srcset=""
        />
        <Image
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
          srcset=""
        />
      </div>
      <p className="h4">
        List of guide eBooks for the {selectedPlan} plan goes here...
      </p>
      <div className="d-flex">
        <Image
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
        />
        <Image
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
          srcset=""
        />
        <Image
          className="img-thumbnail img-fluid"
          src={Logo}
          alt="img"
          style={{ width: '400px', height: '200px' }}
          srcset=""
        />
      </div>
      <h2 className="h4">Detailed Itineraries</h2>
      <p className="h4">
        List of detailed itineraries for the {selectedPlan} plan goes here...
      </p>
    </div>
  );
};

export default ContentAccessPage;
