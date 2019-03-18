import React from 'react';
import { observer } from 'mobx-react';

class ObserverComponent extends React.Component {
  static observer(...args) {
    return observer(...args);
  }
}

export default observer(ObserverComponent);
