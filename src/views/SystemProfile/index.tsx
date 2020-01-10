import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from 'components/Header';
import './index.scss';

const mockSystems: any[] = [
  { id: 'All', name: 'All', slug: 'all', link: '/system/all' },
  { id: '1', name: 'System1', slug: 'system1', link: '/system/system1' },
  { id: '2', name: 'System2', slug: 'system2', link: '/system/system2' },
  { id: '3', name: 'System3', slug: 'system3', link: '/system/system3' },
  { id: '4', name: 'System4', slug: 'system4', link: '/system/system4' },
  { id: '5', name: 'System5', slug: 'system5', link: '/system/system5' }
];

type SystemProfileProps = {
  match: any;
};

export const SystemProfile = ({ match }: SystemProfileProps) => {
  return (
    <div className="system-profile">
      <Header
        secondaryNavList={mockSystems.slice(0, 10)}
        activeNavListItem={match.params.profileId}
      />
      <div className="grid-container">
        <div className="grid-col-8">
          <div className="grid-col-8">
            <h1 className="system-profile__acronym">CATQ</h1>
            <h2 className="system-profile__name">
              Center for Automation Technology Quality
            </h2>
            <h3 className="system-profile__heading">Description</h3>
            <p className="system-profile__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <hr className="system-profile__hr" />
          {/* System Info - Can potentially be moved to its own component if it is reused elsewhere */}
          <div className="system-profile__system-info">
            <h3 className="system-profile__heading">System Information</h3>
            <div className="system-profile__info-list">
              <dl className="system-profile__info-item">
                <dt className="system-profile__info-label">Datapoint 1</dt>
                <dd className="system-profile__info-data">Some Value Here</dd>
              </dl>
              <dl className="system-profile__info-item">
                <dt className="system-profile__info-label">Datapoint 2</dt>
                <dd className="system-profile__info-data">Fancy information</dd>
              </dl>
              <dl className="system-profile__info-item">
                <dt className="system-profile__info-label">Datapoint 3</dt>
                <dd className="system-profile__info-data">Fanciest stuff</dd>
              </dl>
              <dl className="system-profile__info-item">
                <dt className="system-profile__info-label">Datapoint 4</dt>
                <dd className="system-profile__info-data">
                  More fancy information
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SystemProfile);