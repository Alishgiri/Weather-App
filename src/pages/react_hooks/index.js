import React from "react";
import { Container } from "react-bootstrap";
import UseImperativeHandleHook from "./imperative_handle/imperative_handle";

import UseCallbackHook from "./use_callback";
import UseEffectHook from "./use_effect";
import UseLayoutEffectHook from "./use_layout_effect";
import UseReducerHook from "./use_reducer";
import UseRefHook from "./use_ref";

export default () => (
  <Container className="h-100" fluid>
    <UseImperativeHandleHook />
  </Container>
);
