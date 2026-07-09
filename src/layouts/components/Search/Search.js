import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as Popover from '@radix-ui/react-popover';
import { useEffect, useRef, useState } from 'react';
import { ResultItem } from './ResultItem';

const MOCK_SEARCH_RESULTS = {
  users: [
    {
      id: 'u1',
      name: 'Võ Trần Tín',
      username: 'tinvotran',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tin',
    },
    {
      id: 'u2',
      name: 'Zenithora Official',
      username: 'zenithora_app',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=zenithora',
    },
  ],
  posts: [
    {
      id: 'p1',
      title:
        'Chào sân Zenithora! Nơi kết nối những ý tưởng độc đáo và lan tỏa năng lượng tích cực.',
      slug: 'chao-san-zenithora-ket-noi-y-tuong',
      author: 'Zenithora Official',
      createdAt: '1 giờ trước',
    },
    {
      id: 'p2',
      title:
        'Lộ trình phát triển các tính năng cốt lõi của Zenithora trong giai đoạn alpha test.',
      slug: 'lo-trinh-phat-trien-tinh-nang-zenithora',
      author: 'Võ Trần Tín',
      createdAt: '5 giờ trước',
    },
    {
      id: 'p3',
      title:
        'Cảm nhận đầu tiên khi trải nghiệm giao diện mượt mà và tốc độ phản hồi cực nhanh của hệ sinh thái này.',
      slug: 'cam-nhan-dau-tien-trai-nghiem-zenithora',
      author: 'Hoàng Yến',
      createdAt: '1 ngày trước',
    },
  ],
};

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchValue.trim().length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchValue]);

  const handleOnFocus = () => {
    setIsFocus(true);
    if (searchValue.trim().length > 0) {
      setShowResults(true);
    }
  };

  const handleEscapeKeyDown = () => {
    setShowResults(false);
    inputRef.current?.blur();
  };

  return (
    <Popover.Root
      open={showResults}
      onOpenChange={(open) => {
        if (!open && !isFocus) setShowResults(false);
      }}
    >
      <Popover.Trigger asChild>
        <div className={styles.search}>
          <button className={styles.searchButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            ref={inputRef}
            placeholder="Search"
            spellCheck={false}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={handleOnFocus}
            onBlur={() => setIsFocus(false)}
          />
        </div>
      </Popover.Trigger>

      {showResults && (
        <Popover.Portal>
          <Popover.Content
            align="center"
            sideOffset={8}
            className={styles.Popover}
            onOpenAutoFocus={(e) => e.preventDefault()}
            onEscapeKeyDown={handleEscapeKeyDown}
          >
            {MOCK_SEARCH_RESULTS.users.length > 0 && (
              <div className={styles.section}>
                <div className={styles.sectionHeader}>Users</div>
                {MOCK_SEARCH_RESULTS.users.map((result) => (
                  <ResultItem
                    key={result.id}
                    result={result}
                    onClick={() => setSearchValue('')}
                  />
                ))}
              </div>
            )}
            {MOCK_SEARCH_RESULTS.posts.length > 0 && (
              <div className={styles.section}>
                <div className={styles.sectionHeader}>Posts</div>
                {MOCK_SEARCH_RESULTS.posts.map((result) => (
                  <ResultItem
                    key={result.id}
                    result={result}
                    onClick={() => setSearchValue('')}
                  />
                ))}
              </div>
            )}
          </Popover.Content>
        </Popover.Portal>
      )}
    </Popover.Root>
  );
}

export default Search;
