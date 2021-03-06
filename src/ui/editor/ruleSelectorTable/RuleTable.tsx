import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { cellWidth, RuleCell } from './RuleCell'
import { useStore } from '../../util/useContextHook'
import { ruleData } from '../../../data/ruleData'
import { useSharedStyle } from '../../style'

let useStyle = makeStyles((theme: Theme) =>
   createStyles({
      table: {
         maxWidth: 32 * cellWidth,
      },
   }),
)

export let RuleTable = observer(() => {
   let c = useStyle()
   let s = useSharedStyle()
   let store = useStore()
   let ccc: string[] = [c.table, s.inlineBlock, `tt-${store.ruleTrait}`]

   let ruleList = Array.from({ length: 256 }, (_, k) => {
      return <RuleCell key={k} number={k} info={ruleData[k]} />
   })

   let n = store.rule.number
   ruleList[n] = <RuleCell active key={n} number={n} info={ruleData[n]} />

   let groupList: React.ReactElement[] = Array.from({ length: 16 }, (_, k) => {
      return (
         <div className={s.inlineBlock} key={k}>
            {ruleList.slice(16 * k, 16 * (k + 1))}
         </div>
      )
   })

   return <div className={ccc.join(' ')}>{groupList}</div>
})
