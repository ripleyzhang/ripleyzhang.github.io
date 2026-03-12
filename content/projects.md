---
title: "Projects"
date: 2026-03-10
draft: false
---

Here are some of my selected projects.

## Read-Copy-Update in xv6 – OS kernel Project

_Oct. 2025 – Nov. 2025_

- Implement Read-Copy-Update (RCU) in xv6 to achieve significant performance improvements for read-heavy workloads by adding per-CPU reader tracking, grace-period detection, and deferred memory reclamation.
- Reproduce the methodology in “RCU Usage In the Linux Kernel: One Decade Later”

## Pong Game on an FPGA in Verilog

_Nov.2025 – Dec.2025_

- Designed and implemented a Pong game running on a custom Verilog CPU, interfaced with VGA display output and PS/2 keyboard input.
- Memory-mapped a dedicated physical address region as game control and state registers, enabling CPU–peripheral interaction.

## Parallelism in Pipelined CPU Based on RISC-V

_Jan. 2024 - Mar. 2024_

- Design and implement a pipelined CPU based on the RISC-V ISA in Verilog, with dynamic branch prediction, pipeline redirection and interrupt handling; Explore Instruction-Level Parallelism.
- The combined use of Branch Target Buffer (BTB), Pattern History Table (PHT), and Global History Register (GHR) forms a complex and powerful branch prediction mechanism, capable of improving prediction accuracy and overall processor performance

## Computer System from Scratch Lab

_Sept. 2023- Jan.2024_

- Build a complete computer system stack, including the NEMU (Nan-QEMU) hardware simulator, Abstract Machine (AM) runtime, NanOS-lite operating system, and the Navy-apps application library.
- Evaluate the validation by running a complete application (The Legend of Sword and Fairy).

## Proxy Kernel Environment OS Lab

_Jan. 2023- Mar. 2023_

- Build a micro-OS kernel on the RISC-V architecture, implementing exception/interrupt handling, process management, and memory management.
- Evaluate the kernel on the QEMU emulator, successfully running user programs and system call interfaces. Strengthen understanding of OS fundamentals and low-level hardware-software interaction.

## Bluetooth Communication Whiteboard

_Oct 2022 - Jan. 2023_

- Deploy Linux on Orange Pi and develop an embedded multi-touch application enabling cross-device Bluetooth communication, integrating hardware-software co-design.
