import { faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faCircleHalfStroke,
  faStarAndCrescent,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '~/Provider/ThemeProvider';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ThemeSwitcher.module.scss';

const THEME_OPTIONS = [
  {
    value: 'light',
    label: 'LIGHT',
    icon: faSun,
  },
  {
    value: 'dark',
    label: 'DARK',
    icon: faStarAndCrescent,
  },
  {
    value: 'system',
    label: 'AUTO',
    icon: faCircleHalfStroke,
  },
];

function ThemeSwitcher() {
  const { userTheme, setUserTheme } = useTheme();

  const currentIcon =
    THEME_OPTIONS.find((opt) => opt.value === userTheme)?.icon ||
    faCircleHalfStroke;

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button className={styles.triggerBtn}>
          <FontAwesomeIcon icon={currentIcon} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="end"
        sideOffset={8}
        className={styles.dropdownMenu}
      >
        {THEME_OPTIONS.map((opt) => (
          <DropdownMenu.Item
            key={opt.value}
            className={styles.optWrapper}
            onSelect={() => setUserTheme(opt.value)}
          >
            <FontAwesomeIcon icon={opt.icon} /> {opt.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default ThemeSwitcher;
