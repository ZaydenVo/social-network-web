import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useTheme } from '~/Provider/ThemeProvider';
import { useNavigate } from 'react-router-dom';

function Menu({ children, menuItems }) {
  const { isLightMode } = useTheme();
  const navigate = useNavigate();

  const handleOnSelect = (opt) => {
    if (opt.to) {
      navigate(opt.to);
    } else if (opt.action) {
      opt.action();
    }
  };

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="end"
        sideOffset={8}
        className={clsx(styles.dropdownMenu, { lightTheme: isLightMode })}
      >
        {menuItems.map((opt) => {
          const hasChildren = !!opt.children;

          return (
            <div key={opt.label}>
              {opt.hasSeparator && (
                <DropdownMenu.Separator className={styles.separator} />
              )}
              {hasChildren ? (
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger className={styles.optWrapper}>
                    <FontAwesomeIcon icon={opt.icon} />
                    <span className={styles.label}>{opt.label}</span>
                  </DropdownMenu.SubTrigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.SubContent
                      sideOffset={4}
                      alignOffset={-6}
                      className={clsx(styles.dropdownMenu, {
                        lightTheme: isLightMode,
                      })}
                    >
                      <div className={styles.menuTitle}>
                        {opt.children.title}
                      </div>

                      {opt.children.data.map((subOpt) => (
                        <DropdownMenu.Item
                          key={subOpt.code}
                          className={styles.optWrapper}
                          onSelect={() =>
                            console.log(`Đã chọn ngôn ngữ: ${subOpt.code}`)
                          }
                        >
                          {subOpt.label}
                        </DropdownMenu.Item>
                      ))}
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Portal>
                </DropdownMenu.Sub>
              ) : (
                <DropdownMenu.Item
                  className={clsx(styles.optWrapper, {
                    [styles.danger]: opt.isDanger,
                  })}
                  onSelect={() => handleOnSelect(opt)}
                >
                  <FontAwesomeIcon icon={opt.icon} />
                  <span className={styles.label}>{opt.label}</span>
                </DropdownMenu.Item>
              )}
            </div>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default Menu;
