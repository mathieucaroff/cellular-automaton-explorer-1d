import * as React from 'react'

import { makeStyles, Theme, createStyles } from '@material-ui/core'

import { Rule } from './Rule'
import { OxTable } from '../../components/OxTable'
let noVeritcalMargins = {
   marginTop: 0,
   marginBottom: 0,
}

export let useStyle = makeStyles((theme: Theme) =>
   createStyles({
      inlineBlock: { display: 'inline-block' },
      spacer: {
         marginLeft: '2em',
      },
   }),
)

export let InterestingRuleList = () => {
   let classes = useStyle()

   let rr = (...ruleList) => {
      let joinedList = ([] as any[])
         .concat(...ruleList.map((n, k) => [' ', <Rule key={k} rule={n} />]))
         .slice(1)
      return React.createElement(React.Fragment, null, ...joinedList)
   }

   return (
      <>
         <div className={classes.inlineBlock}>
            <OxTable
               tableHead={[['Description'], ['Rules']]}
               tableData={[
                  ['Famous', rr(110, 30, 90)],
                  ['Turing Complete', rr(110)],
                  ['Class 4', rr(54, 106, 110)],
                  ["Author's favorite", rr(73, 26, 105)],
               ]}
            />
         </div>
         <span className={classes.spacer}></span>
         <div className={classes.inlineBlock}>
            <OxTable
               tableHead={[['Description'], ['Rules']]}
               tableData={[
                  ['XOR', rr(60, 90, 105, 150)],
                  ['Twinkling', rr(41, 45, 62, 73, 105, 94, 15, 51)],
                  ['Triangle', rr(18, 22, 26, 86, 122, 126)],
                  ['Primitives', rr(0, 255, 204, 51, 170, 240)],
               ]}
            />
         </div>
      </>
   )
}