import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { observer, useLocalStore } from 'mobx-react-lite'
import * as React from 'react'
import { Display } from '../display/display'
import { Hub } from '../state/hub'
import { Store } from '../state/store'
import { Configurator } from '../ui/control/Configurator'
import { Controller } from '../ui/control/Controller'
import { DisplayAdapter } from '../ui/DisplayAdapter'
import { Editor } from '../ui/editor/Editor'
import { displayContext, hubContext, storeContext } from './global'
import { muiThemeFromCellexp, themeSet } from './theme'
import { DisplayHeader } from '../ui/control/DisplayHeader'
import { DisplayFooter } from '../ui/control/DisplayFooter'

export interface AppProp {
   display: Display
   hub: Hub
   store: Store
}

let App = observer((prop: AppProp) => {
   let { display, hub, store } = prop

   let local = useLocalStore(() => ({
      get muiTheme() {
         return muiThemeFromCellexp(themeSet[store.theme])
      },
   }))

   return (
      <hubContext.Provider value={hub}>
         <storeContext.Provider value={store}>
            <displayContext.Provider value={display}>
               <ThemeProvider theme={local.muiTheme}>
                  <DisplayAdapter
                     display={display}
                     header={<DisplayHeader />}
                     footer={<DisplayFooter />}
                  />
                  <Editor />
                  <Controller />
                  <Configurator />
                  <CssBaseline />
               </ThemeProvider>
            </displayContext.Provider>
         </storeContext.Provider>
      </hubContext.Provider>
   )
})

export let appElement = (prop: AppProp) => {
   return <App {...prop} />
}
