import { memo } from 'react';
import './style.scss';

function Loader() {
  return (
    <div className="loader">
      <span className="loader__figure" />
    </div>
  );
}

export default memo(Loader);
