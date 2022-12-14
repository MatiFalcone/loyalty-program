import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Badge } from 'reactstrap';

import blog1 from '../../../assets/images/bg/bg3.jpg';

const Blog2 = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Blog                                                 */
    /*--------------------------------------------------------------------------------*/

    <Card>
      <img src={blog1} alt={blog1} className="img-fluid" />
      <CardBody>
        <CardTitle className="mt-2" tag="h3">
        Business development of rules 2022
        </CardTitle>
        <Badge color='info' className='rounded-pill mt-3 text-dark-white'>Technology</Badge>
        <CardSubtitle className="text-muted mt-4 fs-5">Titudin venenatis ipsum aciat. Vestibu ullamer quam. nenatis ipsum ac.</CardSubtitle>
        <div className='d-flex align-items-center mt-4 pt-1'>
            <a href='/' className='text-decoration-none link-info fw-normal'>Read more</a>
            <div className='ms-auto'>
            <a href='/' className='text-decoration-none link-dark'><i className='bi bi-heart-fill fs-5'></i></a>
            <a href='/' className='text-decoration-none link-dark ms-2'><i className='bi bi-share-fill fs-5'></i></a>
            </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Blog2;
