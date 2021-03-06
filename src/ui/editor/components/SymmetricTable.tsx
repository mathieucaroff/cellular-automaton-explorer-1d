import { createStyles, makeStyles, Theme } from '@material-ui/core'
import * as React from 'react'
import { toBase } from '../../../util/baseConverter'
import { OxTable } from '../../components/OxTable'
import { RuleLink } from './RuleLink'
import { createElementaryRule } from '../../../compute/Rule'

let reverse = (v: string): string => {
   return v
      .split('')
      .reverse()
      .join('')
}

let useStyle = makeStyles((theme: Theme) => {
   let style = {
      width: 'max-content', // 'initial',
   }

   return createStyles({
      container: {
         display: 'inline-block',
         width: '100%',
      },
      tableContainer: style,
      table: style,
   })
})

export interface SymmetricTableProp {
   label: string
   ruleNumber: number
   symmetricReferenceRule: number
   symmetricMessage: string
}

export let SymmetricTable = (prop: SymmetricTableProp) => {
   let { label, ruleNumber, symmetricReferenceRule, symmetricMessage } = prop

   let classes = useStyle()

   let binary = toBase(ruleNumber, 2, { size: 255 })
   let colorInputComplement = parseInt(reverse(binary), 2)
   let colorSymmetric = 255 - colorInputComplement

   //              [0, 1, 2, 3, 4, 5, 6, 7]
   //              [   x     y  x     y   ]
   let lrSwapped = [0, 4, 2, 6, 1, 5, 3, 7].map((k) => binary[k]).join('')
   let lrSymmetric = parseInt(lrSwapped, 2)
   let bothSymmetric = 255 - parseInt(reverse(lrSwapped), 2)

   let describe = (symmetricRule: number) => {
      let status =
         symmetricRule === symmetricReferenceRule ? `${symmetricMessage} ` : ''
      return (
         <>
            {status}
            <RuleLink rule={createElementaryRule(symmetricRule)} />
         </>
      )
   }

   let tableInfo: [string, number][] = [
      ['Left-right symmetry', lrSymmetric],
      ['Color symmetry', colorSymmetric],
      ['Both symmetries', bothSymmetric],
   ]

   let tableData = tableInfo.map(([name, r]) => [name, describe(r)])

   return (
      <div className={classes.container}>
         <h4>
            {label} <RuleLink rule={createElementaryRule(ruleNumber)} />
         </h4>
         <OxTable
            tableHead={[['Name'], ['Symmetric Rule', 'center']]}
            tableData={tableData}
         />
      </div>
   )
}
