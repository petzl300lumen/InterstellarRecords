import React from 'react';
import { Alert } from 'antd';

export default function Error({error}) {
  return (
    <Alert message={error} type="error" showIcon style={{width: 1000, height: 100, margin: 'auto'}}/>
  )
}
