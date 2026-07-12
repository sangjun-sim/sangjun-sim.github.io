---
title: Refactoring Notes
date: 2026-07-10 11:00:00 +0900
categories:
  - Programming
  - Architecture
tags:
  - refactoring
  - architecture
math: true
toc: true
---

## What is Refactoring

리팩토링은 소프트웨어가 겉으로 드러내는 방식은 유지하면서 코드 내부 구조를 개선시키는 작업을 의미한다. 리팩토링과 단순히 재구성하는 것의 차이는 코드를 정리할 때 "특정한 방식"을 사용하는가에 있다.

## When to Refactoring

돈 로버츠는 비슷한 일을 "세 번째로 하게 되면" 리팩토링을 해야 한다(3의 법칙)고 말한다. 마틴 파울러는 그 대신 아래 조건에서 리팩토링을 해야 한다고 말한다:

1. **preparatory refactoring**. 코드베이스에 새 기능을 추가하기 직전
2. **comprehension refactoring**. 이해하기 쉬운 코드를 만들 때
3. **litter-pickup refactoring**. 복잡하거나 반복되는 로직/함수와 같은 비효율적인 코드를 정리할 때 

## Why Refactoring

리팩토링을 하는 이유는 결국 좋은 설계를 만들기 위함이다. 왜 좋은 설계가 필요할까? 그 이유는 바로 개발자가 작성한 소프트웨어를 이해하기 쉽게 만들고, 버그를 쉽게 찾을 수 있게 할 수 있기 때문이다. 그것은 곧바로 **생산성**에 직접적인 영향을 준다. 하지만 여기서 주의해야 할 점이 있다. 그것은 바로:

> "**구체적인 이유**가 있느냐" 이다.

단순히 코드베이스를 깨끗하게 만들고 싶어서 하게 되는 리팩토링은 과잉 엔지니어링이다.

---

## References

1. Fowler, M. _Refactoring: Improving the Design of Existing Code_ (Addison-Wesley Professional, 1999).