import { KeyboardManager } from './keyboardManager'
import { Display } from './display'
import { Remover } from '../util/RemoverType'

export interface KeyboardBindingProp {
   display: Display
   keyKb: KeyboardManager
   codeKb: KeyboardManager
}

export let keyboardBinding = (prop: KeyboardBindingProp): Remover => {
   let { display, keyKb, codeKb } = prop
   let { act } = display

   let removerList = [] as (() => void)[]

   let onKeydownForKb = (kb: KeyboardManager) => (
      key: string,
      fn: () => void,
   ) => {
      let { remove } = kb.onKeydown(key, fn)
      removerList.push(remove)
   }

   let onKeydown = onKeydownForKb(keyKb)
   let codeOnKeydown = onKeydownForKb(codeKb)

   onKeydown(' ', act.togglePlay)
   onKeydown('Enter', act.singleStep)

   onKeydown('ArrowLeft', act.goLeft)
   onKeydown('ArrowRight', act.goRight)
   onKeydown('ArrowUp', act.goUp)
   onKeydown('ArrowDown', act.goDown)

   onKeydown('PageUp', act.pageUp)
   onKeydown('PageDown', act.pageDown)
   onKeydown('Home', act.pageLeft)
   onKeydown('End', act.pageRight)

   onKeydown('[', act.halfSpeed)
   onKeydown(']', act.doubleSpeed)

   onKeydown('{', act.gotoMaxLeft)
   onKeydown('|', act.gotoCenter)
   onKeydown('}', act.gotoMaxRight)

   codeOnKeydown('Digit0', act.gotoTop)

   codeOnKeydown('Minus', act.decreaseZoom)
   codeOnKeydown('Equal', act.increaseZoom)

   return {
      remove: () => {
         removerList.forEach((f) => f())
      },
   }
}
