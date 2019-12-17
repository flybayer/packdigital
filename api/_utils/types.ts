import { NowRequest } from "@now/node"

type Obj = { [key: string]: any }

interface HasuraInsertEvent {
  session_variables: Obj | null
  op: "INSERT"
  data: {
    old: null
    new: Obj
  }
}
interface HasuraUpdateEvent {
  session_variables: Obj | null
  op: "UPDATE"
  data: {
    old: Obj
    new: Obj
  }
}
interface HasuraDeleteEvent {
  session_variables: Obj | null
  op: "DELETE"
  data: {
    old: Obj
    new: null
  }
}
interface HasuraManualEvent {
  session_variables: Obj | null
  op: "MANUAL"
  data: {
    old: null
    new: Obj
  }
}

export interface HasuraEventPayload {
  id: string
  created_at: string
  event: HasuraInsertEvent | HasuraUpdateEvent | HasuraDeleteEvent | HasuraManualEvent
  trigger: {
    name: string
  }
  table: {
    schema: string
    name: string
  }
  delivery_info: {
    max_retries: number
    current_retry: number
  }
}

export interface NowHasuraRequest extends NowRequest {
  body: HasuraEventPayload
}
