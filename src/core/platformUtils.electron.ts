import { shell } from "electron";
import { ipcRenderer } from 'electron';
import { remote } from 'electron';

const openLink = (e, linkUrl) => {
    e.preventDefault();
    shell.openExternal(linkUrl, {});
  };
  
const getAppVersion = () => {
  return  remote.app.getVersion()?.replace("v", "")
}

export {openLink, ipcRenderer as platformEvents, getAppVersion};