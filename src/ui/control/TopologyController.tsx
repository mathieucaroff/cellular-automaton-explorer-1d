import {
   createStyles,
   makeStyles,
   MenuItem,
   Select,
   Theme,
} from '@material-ui/core'
import { set, action } from 'mobx'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { BorderPattern } from '../../compute/topology'
import { useStore } from '../util/useContextHook'
import { BorderField } from './components/BorderField'

let useStyle = makeStyles((theme: Theme) =>
   createStyles({
      topology: {
         '& > *': {
            display: 'inline-block',
            margin: theme.spacing(1),
         },
      },
   }),
)

export let TopologyController = observer(() => {
   let store = useStore()
   let classes = useStyle()

   let { finitness, width } = store.topology

   let dead = {
      cumulativeMap: [1, 1],
      total: 1,
   }

   let simpleDeadBorder: BorderPattern = {
      kind: 'side',
      init: [],
      cycle: [dead],
   }

   let handleChange = action((event: any) => {
      let kind: 'loop' | 'border' = event.target.value

      if (kind !== store.topology.kind) {
         if (kind === 'loop') {
            store.topology.kind = kind
         } else if (kind === 'border') {
            set(store.topology, {
               borderLeft: simpleDeadBorder,
               borderRight: simpleDeadBorder,
               finitness,
               width,
            })
            set(store.topology, {
               kind,
            })
         }
      }
   })

   return (
      <div className={classes.topology}>
         <Select value={store.topology.kind} onChange={handleChange}>
            <MenuItem value="loop">Loop</MenuItem>
            <MenuItem value="border">Border</MenuItem>
         </Select>
         <BorderField
            property={'genesis'}
            side={'top'}
            topology={store.topology}
         />
         <BorderField
            property={'borderLeft'}
            side={'left'}
            topology={store.topology}
         />
         <BorderField
            property={'borderRight'}
            side={'right'}
            topology={store.topology}
         />
      </div>
   )
})
