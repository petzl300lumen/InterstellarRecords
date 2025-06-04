import React from 'react';
import { Alert } from 'antd';

export default function Error({error}) {
  return (
    <Alert message={error} type="error" showIcon style={{width: 450, height: 50, margin: 'auto'}}/>
  )
}
