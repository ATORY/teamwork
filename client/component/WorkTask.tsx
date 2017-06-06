import * as React from 'react';

interface WorkTaskProps {

}

interface WorkTaskState {

}

export class WorkTask extends React.Component<WorkTaskProps, WorkTaskState> {
  render() {
    return (
      <div className='works-task'>
        <div className='work-title-w'>
          <div className='work-title'>title</div>
        </div>
        <div className='work-item-w'>
          <div className='work-item' draggable={true}>1</div>
          <div className='work-item' draggable={true}>2</div>
          <div className='work-item'>3</div>
          <div className='work-item'>4</div>
          <div className='work-item'>5</div>
          <div className='work-item'>6</div>
          <div className='work-item'>7</div>
          <div className='work-item'>8</div>
          <div className='work-item'>9</div>
          <div className='work-item'>10</div>
          <div className='work-item'>11</div>
        </div>
      </div>
    )
  }
}
