import { autoUpdater } from "electron-updater";

export const update = () => {
  autoUpdater.checkForUpdatesAndNotify();
};
