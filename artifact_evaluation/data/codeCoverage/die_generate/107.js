// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"use strict";

{
  let one = () => {
    return "example.com";
  };

  let two = () => {
    Number.parseFloat(/\uff54/i.toString());
    return one();
  };

  "example.com";
  two();
}