import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  Button, Col, Form, FormControl, Row
} from 'react-bootstrap';

function ShareMovie({ shareMovie }) {
  const urlRef = useRef(null);
  const shareFunc = useCallback(() => shareMovie(urlRef.current.value), []);

  return (
    <div id="share-movie-block">
      <div id="share-movie-title">
        <b>Share a Youtube movie</b>
      </div>
      <div id="share-movie-content">
        <Form>
          <Form.Group as={Row} style={{ marginBottom: '0px' }}>
            <Form.Label column sm={3} style={{ paddingLeft: '25px' }}>
              Youtube URL:
            </Form.Label>
            <Col>
              <FormControl
                id="shareMovieFormYoutubeURL"
                ref={urlRef}
                size="sm"
                placeholder="Youtube URL"
                className="mb-2 mr-sm-2"
                style={{ marginTop: '5px' }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{ marginBottom: '0px' }}>
            <Form.Label column sm={3} />
            <Col>
              <Button
                variant="secondary"
                size="sm"
                className="mb-2"
                onClick={shareFunc}
              >
                Share
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

ShareMovie.propTypes = {
  shareMovie: PropTypes.func.isRequired,
};

export default ShareMovie;
