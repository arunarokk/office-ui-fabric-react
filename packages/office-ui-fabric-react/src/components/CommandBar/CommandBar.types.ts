import * as React from 'react';
import { IContextualMenuItem, IContextualMenuProps } from '../ContextualMenu/index';

export interface ICommandBar {
  /**
   * Sets focus to the active command in the list.
   */
  focus(): void;
}

export interface ICommandBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional callback to access the ICommandBar interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: ICommandBar | null) => void;

  /**
   * Whether or not the search box is visible
   * @defaultvalue false
   */
  isSearchBoxVisible?: boolean;

  /**
   * Placeholder text to display in the search box
   */
  searchPlaceholderText?: string;

  /**
   * Items to render
   */
  items: IContextualMenuItem[];

  /**
   * Default items to have in the overflow menu
   */
  overflowItems?: IContextualMenuItem[];

  /**
  * Menu props to be passed to overflow elipsis
  */
  overflowMenuProps?: Partial<IContextualMenuProps>;

  /**
   * Text to be read by screen readers if there are overflow items and focus is on elipsis button
   */
  elipisisAriaLabel?: string;

  /**
   * Items to render on the right side (or left, in RTL).
   */
  farItems?: IContextualMenuItem[];

  /**
   * Additional css class to apply to the command bar
   * @defaultvalue undefined
   */
  className?: string;
}

export interface ICommandBarItemProps extends IContextualMenuItem {
  /**
   * Remove text when button is not in the overflow
   * @defaultvalue false
   */
  iconOnly?: boolean;
}