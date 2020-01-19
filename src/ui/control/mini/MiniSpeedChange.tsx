import { createStyles, makeStyles, Theme } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { Xelement } from '../../util/Xelement'
import { useDisplay, useStore } from '../../util/useContextHook'

let useStyle = makeStyles((theme: Theme) =>
   createStyles({
      buttonContainer: {
         '&': {
            display: 'flex',
         },
         '& > *': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
         },
      },
   }),
)

/**
 * (1) Small moves
 * (2) Big move
 * (3) Go to top
 */
export let MiniSpeedChange = observer(() => {
   let classes = useStyle()
   let display = useDisplay()

   return (
      <div className={classes.buttonContainer}>
         <ButtonGroup orientation="vertical" size="small">
            <Button
               disabled={display.info.passingMinSpeed}
               onClick={display.act.halfSpeed}
            >
               /2
            </Button>
            <Button
               disabled={display.info.passingMaxSpeed}
               onClick={display.act.doubleSpeed}
            >
               x2
            </Button>
         </ButtonGroup>
      </div>
   )
})
