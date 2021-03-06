import createElement from './create-element'
import { extend, clone } from 'nerv-utils'
import { isVText } from 'nerv-shared'

export default function cloneElement (vnode, props, ...children): any {
  if (isVText(vnode)) {
    return vnode
  }
  const properties = extend(clone(vnode.props), props)
  if (vnode.namespace) {
    properties.namespace = vnode.namespace
  }
  return createElement(
    vnode.type,
    properties,
    arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children
  )
}
