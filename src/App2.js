import React from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

class App extends React.Component {
  render() {
    return (
      <StreamApp apiKey='dz5f4d5kzrue' appId='102254' token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicGF0aWVudC1oYXplLTIiLCJleHAiOjE3MTQ1MjE4MzR9.h2WJNkk9hQi_e2-9iBzmZWiBIeQP7iWKhUZAoDiejUw'>
        <NotificationDropdown notify />
        <FlatFeed
          notify
          Activity={(props) => (
            <Activity
              {...props}
              Footer={() => (
                <div style={{ padding: '8px 16px' }}>
                  <LikeButton {...props} />
                </div>
              )}
            />
          )}
        />
      </StreamApp>
    );
  }
}

export default App;
