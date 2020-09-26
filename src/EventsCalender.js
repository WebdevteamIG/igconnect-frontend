import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, MonthAgenda, Inject } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import * as dataSource from './datasource.json';

/**
 * Schedule month agenda sample
 */
export default class EventsCalender extends SampleBase {
    constructor() {
        super(...arguments);
        this.data = extend([], dataSource.fifaEventsData, null, true);
    }
    render() {
        return (
        <center><div className='schedule-control-section'>
        <div className='col-lg-5 control-section'>
          <div className='control-wrapper schedule-wrapper'>
            <ScheduleComponent width='100%' height='510px' selectedDate={new Date()} eventSettings={{ dataSource: this.data }}>
              <ViewsDirective>
                <ViewDirective option='MonthAgenda'/>
              </ViewsDirective>
              <Inject services={[MonthAgenda]} />
            </ScheduleComponent>
          </div>
        </div>
      </div>
      </center>
      );
    }
}