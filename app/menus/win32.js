const { localized } = require('../src/intl');

module.exports = {
  menu: [
    {
      id: 'Edit',
      label: localized('Edit'),
      submenu: [
        { label: localized('Undo'), command: 'core:undo' },
        { label: localized('Redo'), command: 'core:redo' },
        { type: 'separator' },
        { label: localized('Cut'), command: 'core:cut' },
        { label: localized('Copy'), command: 'core:copy' },
        { label: localized('Paste'), command: 'core:paste' },
        { label: localized('Paste and Match Style'), command: 'core:paste-and-match-style' },
        { label: localized('Select All'), command: 'core:select-all' },
        { type: 'separator' },
        { label: localized('Select All Read'), command: 'thread-list:select-read' },
        { label: localized('Select All Unread'), command: 'thread-list:select-unread' },
        { label: localized('Select All Starred'), command: 'thread-list:select-starred' },
        { label: localized('Select All Unstarred'), command: 'thread-list:select-unstarred' },
        { type: 'separator' },
        {
          label: localized('Mark All as %@', localized('Read')),
          command: 'thread-list:mark-all-as-read',
        },
        { type: 'separator' },
        {
          label: localized('Find'),
          submenu: [
            { label: localized('Find in Mailbox') + '...', command: 'core:focus-search' },
            { label: localized('Find in Thread') + '...', command: 'core:find-in-thread' },
            { label: localized('Find Next'), command: 'core:find-in-thread-next' },
            { label: localized('Find Previous'), command: 'core:find-in-thread-previous' },
          ],
        },
      ],
    },

    {
      id: 'View',
      label: localized('View'),
      submenu: [
        {
          label: localized('Reading Pane Off'),
          type: 'radio',
          command: 'navigation:list-mode-off',
          checked: false,
          hideWhenDisabled: true,
        },
        {
          label: localized('Reading Pane Off'),
          type: 'radio',
          command: 'navigation:list-mode-on',
          checked: true,
          hideWhenDisabled: true,
        },
        {
          label: localized('Horizontal Reading Pane'),
          type: 'radio',
          command: 'navigation:split-mode-off',
          checked: false,
          hideWhenDisabled: true,
        },
        {
          label: localized('Horizontal Reading Pane'),
          type: 'radio',
          command: 'navigation:split-mode-on',
          checked: true,
          hideWhenDisabled: true,
        },
        {
          label: localized('Vertical Reading Pane'),
          type: 'radio',
          command: 'navigation:splitVertical-mode-off',
          checked: false,
          hideWhenDisabled: true,
        },
        {
          label: localized('Vertical Reading Pane'),
          type: 'radio',
          command: 'navigation:splitVertical-mode-on',
          checked: true,
          hideWhenDisabled: true,
        },
        {
          type: 'separator',
        },
        {
          label: localized('Go to %@', localized('Inbox')),
          command: 'navigation:go-to-inbox',
          id: 'first',
        },
        { label: localized('Go to %@', localized('Starred')), command: 'navigation:go-to-starred' },
        { label: localized('Go to %@', localized('Sent Mail')), command: 'navigation:go-to-sent' },
        { label: localized('Go to %@', localized('Drafts')), command: 'navigation:go-to-drafts' },
        { label: localized('Go to %@', localized('All Mail')), command: 'navigation:go-to-all' },
        { type: 'separator' },
        { label: localized('Enter Full Screen'), command: 'window:toggle-full-screen' },
        {
          label: localized('Exit Full Screen'),
          command: 'window:toggle-full-screen',
          visible: false,
        },
      ],
    },

    {
      id: 'Thread',
      label: localized('Thread'),
      submenu: [
        { label: localized('Reply'), command: 'core:reply' },
        { label: localized('Reply All'), command: 'core:reply-all' },
        { label: localized('Forward'), command: 'core:forward' },
        { type: 'separator' },
        { label: localized('Mark as %@', localized('Unread')), command: 'core:mark-as-unread' },
        { label: localized('Mark as %@', localized('Read')), command: 'core:mark-as-read' },
        { label: localized('Mark as %@', localized('Spam')), command: 'core:report-as-spam' },
        { label: localized('Mark as %@', localized('Not Spam')), command: 'core:report-not-spam' },
        {
          label: localized('Mark as Important'),
          command: 'core:mark-important',
          hideWhenDisabled: true,
        },
        {
          label: localized('Mark as Not Important'),
          command: 'core:mark-unimportant',
          hideWhenDisabled: true,
        },
        { label: localized('Star'), command: 'core:star-item' },
        { label: localized('Snooze') + '...', command: 'core:snooze-item' },
        { type: 'separator' },
        { label: localized('Share this thread') + '...', command: 'core:share-item-link' },
        { label: localized('Copy mailbox permalink'), command: 'core:copy-mailbox-link' },
        { type: 'separator' },
        { label: localized('Remove from view'), command: 'core:remove-from-view' },
        { label: localized('Remove and show next'), command: 'core:remove-and-next' },
        { label: localized('Remove and show previous'), command: 'core:remove-and-previous' },
        { type: 'separator' },
        { label: localized('Move to Trash'), command: 'core:delete-item' },
        {
          label: localized('Move to Archive'),
          command: 'core:archive-item',
          hideWhenDisabled: true,
        },
        { label: localized('Move to Folder') + '...', command: 'core:change-folders' },
        {
          label: localized('Apply Label') + '...',
          command: 'core:change-labels',
          hideWhenDisabled: true,
        },
        { type: 'separator' },
        {
          label: localized('Expand / collapse conversation'),
          command: 'message-list:toggle-expanded',
        },
      ],
    },
    {
      id: 'Developer',
      label: localized('Developer'),
      submenu: [
        {
          label: localized('Run with Debug Flags'),
          type: 'checkbox',
          command: 'application:toggle-dev',
        },
        { type: 'separator' },
        { label: localized('Calendar Preview'), command: 'application:show-calendar' },
        { type: 'separator' },
        { label: localized('Create a Plugin') + '...', command: 'window:create-package' },
        { label: localized('Install a Plugin') + '...', command: 'window:install-package' },
        { type: 'separator' },
        { label: localized('Reload'), command: 'window:reload' },
        { label: localized('Toggle Developer Tools'), command: 'window:toggle-dev-tools' },
        {
          label: localized('Toggle Component Regions'),
          command: 'window:toggle-component-regions',
        },
        { label: localized('Toggle Screenshot Mode'), command: 'window:toggle-screenshot-mode' },
        { type: 'separator' },
        { label: localized('Open Mailsync Logs'), command: 'window:open-mailsync-logs' },
        { label: localized('View License'), command: 'application:view-license' },
      ],
    },
    {
      id: 'Window',
      label: localized('Window'),
      submenu: [
        { label: localized('Minimize'), command: 'application:minimize' },
        { label: localized('Zoom'), command: 'application:zoom' },
        { type: 'separator' },
        {
          label: localized('Message Viewer'),
          command: 'application:show-main-window',
          accelerator: 'CmdOrCtrl+0',
        },
        {
          label: localized('Contacts'),
          command: 'application:show-contacts',
        },
        { type: 'separator', id: 'window-list-separator' },
        { type: 'separator', id: 'account-shortcuts-separator' },
      ],
    },
    { type: 'separator' },
    {
      label: localized('Help') + '...',
      command: 'application:view-help',
    },
    {
      label: localized('Getting Started Guide') + '...',
      command: 'application:view-getting-started',
    },
    { label: localized('Mailspring Community') + '...', command: 'application:view-community' },
    { type: 'separator' },
    { label: localized('Sync New Mail Now'), command: 'window:sync-mail-now' },
    { type: 'separator' },
    { label: localized('Preferences'), command: 'application:open-preferences' },
    {
      label: localized('Add Account') + '...',
      command: 'application:add-account',
      args: { source: 'Menu' },
    },
    { label: localized('Change Theme') + '...', command: 'window:launch-theme-picker' },
    { label: localized('Install Theme') + '...', command: 'window:install-package' },
    { type: 'separator' },
    { label: 'VERSION', enabled: false },
    {
      label: localized('Restart and Install Update'),
      command: 'application:install-update',
      visible: false,
    },
    {
      label: localized('Check for Updates'),
      command: 'application:check-for-update',
      visible: false,
    },
    { label: localized('Downloading Update'), enabled: false, visible: false },
    { type: 'separator' },
    { label: localized('Print Current Thread'), command: 'core:print-thread' },
    { type: 'separator' },
    { label: localized('Exit'), command: 'application:quit' },
  ],
};