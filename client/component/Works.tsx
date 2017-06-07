import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { WorkTask } from './WorkTask';

export class Works extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    return (
      <div>
        <div className='article-header'>
        </div>
        <div className='article-body works'>
          {
            [1, 2, 3, 4, 5].map((item: number) => {
              return <WorkTask key={`work-task-${item}`} />;
            })
          }
        </div>
      </div>
    );
  }
}
