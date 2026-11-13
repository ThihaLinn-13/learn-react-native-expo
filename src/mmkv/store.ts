import { MMKVLoader } from "react-native-mmkv-storage";

export const MMKV = new MMKVLoader().initialize();

export const MMKVENC = new MMKVLoader()
  .withEncryption()
  .withInstanceID("encrypted")
  .initialize();
