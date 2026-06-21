---
title: Objective Oriented Programming
date: 2026-06-04 12:00:00 +0900
categories:
  - Programming
  - Architecture
tags:
  - programming
  - architecture
  - objective-oriented-programming
math: true
toc: true
published: false
---

**추상화**. 구체적인 구현 방식(How)을 숨기는 대신, 사용자가 알아야 할 인터페이스(What, 무엇을 할 것인가)만 노출하는 것이다.

**캡슐화**. 

**다형성**. 

**상속**. 

**옵저버 패턴**. 주제 객체와 옵저버 객체가 있어서 주제 객체에 포함된 옵저버 객체들은 주제 데이터에 변동이 생길 경우 갱신 내용을 전달받는다. 옵저버 객체는 일반적으로 여러 개가 될 수 있고 one-to-many 의존성을 지닌다.

**템플릿 메소드**. 추상화 클래스를 도입해서 해당 클래스의 서브클래스에서 알고리즘의 일부 단계를 구현할 수 있도록 해주는 패턴이다. 이 패턴의 특징은 알고리즘에서 필수적이지 않은 부분은 서브클래스에서 훅(hook)으로 사용할 수 있다는 것이다. 이 디자인 패턴은 고수준 구성 요소가 저수준 구성 요소를 언제 어떻게 정할지 결정하는 "할리우드 원칙 (Hollywood principle)"의 디자인 원칙과 밀접한 관련이 있다.
