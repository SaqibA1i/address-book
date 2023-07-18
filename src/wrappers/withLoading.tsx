import React, { ComponentType, useEffect, useState } from 'react';

interface WithLoadingProps {
  isLoading: boolean;
}

// P is a generic type parameter which extends / is a subtype of object
const withLoading = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P & WithLoadingProps> => {
  const WithLoading: React.FC<P & WithLoadingProps> = (props) => {
    const { isLoading } = props;

    return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
  };

  return WithLoading;
};

export default withLoading;
