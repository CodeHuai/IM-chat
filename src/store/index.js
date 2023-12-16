import { createPinia } from 'pinia'
import {useProjectStatusStore} from './projectStatusStore'
import {useUserInfoStore} from './userInfoStore'


export const store = {
  pinia: createPinia(),
  useProjectStatusStore,
  useUserInfoStore
}


