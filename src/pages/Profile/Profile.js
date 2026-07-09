import { Image } from '~/components/Image';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCakeCandles,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

export const MOCK_PROFILE = {
  id: '184a2c4b-dc21-4691-91c8-44d4afdeadef',
  userId: '2f029b3f-362c-49db-8a1b-cb84fa459ee4',
  username: 'zayden',
  firstName: 'Tran Tin',
  lastName: 'Vo',
  avatar:
    'http://localhost:8888/api/file/media/download/57901cc6-f9aa-43a3-baa7-37f17508cfba.jpg',
  city: 'Ho Chi Minh',
  dob: '1993-09-02',
};

function Profile() {
  const defaultCover =
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80';

  return (
    <div className={styles.profileContainer}>
      <div className={styles.heroSection}>
        <div className={styles.coverWrapper}>
          <Image src={defaultCover} alt="Cover" className={styles.coverImg} />
        </div>

        <div className={styles.metaWrapper}>
          <Image
            src={MOCK_PROFILE.avatar}
            alt="Avatar"
            className={styles.avatar}
          />

          <h1
            className={styles.name}
          >{`${MOCK_PROFILE.firstName} ${MOCK_PROFILE.lastName}`}</h1>
          <span className={styles.username}>@{MOCK_PROFILE.username}</span>

          <div className={styles.locationRow}>
            <span className={styles.metaItem}>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {MOCK_PROFILE.city}
            </span>

            <span className={styles.metaItem}>
              <FontAwesomeIcon icon={faCakeCandles} /> {MOCK_PROFILE.dob}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.feed}>Fetch Posts...</div>
      </div>
    </div>
  );
}

export default Profile;
