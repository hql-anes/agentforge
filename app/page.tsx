"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Bot, GitBranch, Activity, ShieldCheck, Gauge, Database,
  TerminalSquare, Sparkles, BarChart3, Workflow, Server, FileCode2,
  Zap, Lock, LineChart, Braces, CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "自动化任务执行", value: "128+" },
  { label: "平均完成耗时", value: "42s" },
  { label: "评测通过率", value: "96.1%" },
  { label: "Token 成本追踪", value: "100%" },
];

const agents = [
  { name: "Planner", icon: GitBranch, desc: "理解目标、抽取约束、生成多步骤执行计划与依赖关系。" },
  { name: "Executor", icon: Activity, desc: "统一调度模型、工具函数、文件处理、外部 API 与异步任务。" },
  { name: "Coder", icon: FileCode2, desc: "生成代码、补全项目结构、执行测试并根据错误日志自动修复。" },
  { name: "Reviewer", icon: ShieldCheck, desc: "检查技术准确性、代码规范、安全风险与输出可用性。" },
  { name: "Evaluator", icon: BarChart3, desc: "评估完成度、执行耗时、失败原因、重试次数与 Token 成本。" },
  { name: "Memory", icon: Database, desc: "沉淀 Prompt 模板、任务经验、上下文摘要与可复用工作流。" },
];

const workflow = [
  { step: "01", title: "需求解析", desc: "从自然语言中提取目标、输入、约束、交付物与验收标准。" },
  { step: "02", title: "任务规划", desc: "Planner 生成 DAG 执行图，拆分为代码、文档、测试和评审节点。" },
  { step: "03", title: "工具执行", desc: "Executor 调用模型、搜索、文件、数据库、脚本与第三方 API。" },
  { step: "04", title: "生成与验证", desc: "Coder 产出代码和内容，自动运行测试、Lint、构建与结果校验。" },
  { step: "05", title: "评审复盘", desc: "Reviewer 与 Evaluator 输出质量评分、失败原因与成本报告。" },
];

const backendModules = [
  [Server, "FastAPI Orchestrator", "提供 /workflow/run、/task/:id、/eval/report 等接口，承载 Agent 编排与状态流转。"],
  [Workflow, "Task State Machine", "任务状态覆盖 queued、planning、running、reviewing、retrying、completed、failed。"],
  [Database, "PostgreSQL + Redis", "PostgreSQL 保存任务、日志、评测和成本；Redis 负责异步队列与实时进度缓存。"],
  [Braces, "Tool Registry", "通过结构化 Schema 管理工具调用，支持文件处理、代码执行、RAG、API 请求与测试命令。"],
] as const;

const logs = [
  "[Planner] parsed goal: build FastAPI + PostgreSQL blog system",
  "[Planner] generated 7 subtasks with dependency graph",
  "[Executor] dispatch coder.generate_project_structure",
  "[Coder] created models.py, schemas.py, crud.py, routes.py",
  "[Executor] running pytest and migration validation",
  "[Reviewer] found 2 issues, applying auto-fix patch",
  "[Evaluator] success_rate=96.1%, latency=42s, tokens=15,672",
];

const evidenceItems = [
  [TerminalSquare, "运行日志", "Agent 执行链路、自动修复记录、测试输出"],
  [LineChart, "评测报告", "模型效果、Token 成本、耗时与失败原因"],
  [Gauge, "账单截图", "2026 年 4–5 月模型平台使用记录"],
  [Lock, "安全说明", "不暴露 API Key，不提交真实敏感账单信息"],
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060914] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute right-[-160px] top-[260px] h-[460px] w-[460px] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute bottom-[-180px] left-[-140px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:32px_32px] opacity-25" />
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 shadow-lg ring-1 ring-white/15 backdrop-blur"><Bot className="h-5 w-5 text-cyan-300" /></div>
          <div><div className="text-sm font-semibold tracking-wide">AgentForge Workflow</div><div className="text-xs text-white/45">Multi-Agent R&D Automation Platform</div></div>
        </div>
        <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
          <a href="#architecture" className="hover:text-white">架构</a><a href="#backend" className="hover:text-white">后端</a><a href="#workflow" className="hover:text-white">工作流</a><a href="#evidence" className="hover:text-white">项目材料</a>
        </div>
        <Button onClick={() => document.getElementById("workflow")?.scrollIntoView({ behavior: "smooth" })}>Launch Demo <ArrowRight className="ml-2 h-4 w-4" /></Button>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 shadow-lg backdrop-blur"><Sparkles className="h-4 w-4" />AI Native · Agent 编排 · 自动验证 · 成本评测</div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">让多 Agent 协作<span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent"> 自动完成复杂 AI 研发任务</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">AgentForge 将需求理解、任务规划、工具调用、代码生成、测试验证、质量评审和成本分析串成闭环，帮助个人开发者与中小型技术团队把 AI 从“聊天辅助”升级为“可追踪、可评测、可复用”的自动化研发工作流。</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" onClick={() => document.getElementById("backend")?.scrollIntoView({ behavior: "smooth" })}>查看系统架构 <ArrowRight className="ml-2 h-4 w-4" /></Button><Button size="lg" variant="outline" onClick={() => window.open("https://github.com/hql-anes/agentforge", "_blank")}>GitHub 仓库</Button></div>
          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">{metrics.map((item) => <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"><div className="text-2xl font-semibold text-white">{item.value}</div><div className="mt-1 text-xs text-white/45">{item.label}</div></div>)}</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl"><div className="rounded-[1.5rem] border border-white/10 bg-[#090F1E] p-5">
            <div className="mb-5 flex items-center justify-between"><div><div className="text-sm text-white/45">Live Workflow Trace</div><div className="font-medium">AI R&D Demo Pipeline</div></div><div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/20">Running</div></div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-xs leading-7 text-white/72">{logs.map((log, index) => <div key={log} className="flex gap-3"><span className="text-white/30">{String(index + 1).padStart(2, "0")}</span><span className={index === logs.length - 1 ? "text-emerald-300" : ""}>{log}</span></div>)}</div>
            <div className="mt-4 grid grid-cols-3 gap-3">{[["Plan","100%"],["Build","96%"],["Review","92%"]].map(([name,value]) => <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3"><div className="text-xs text-white/40">{name}</div><div className="mt-1 text-lg font-semibold text-cyan-200">{value}</div></div>)}</div>
          </div></div>
        </motion.div>
      </section>

      <section id="architecture" className="mx-auto max-w-7xl px-6 py-20"><div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">Layered Agent Architecture</div><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">六类 Agent 构成研发闭环</h2></div><p className="max-w-xl text-white/55">系统不是单一聊天机器人，而是一个面向长链路任务的 Agent 编排平台，所有执行过程都可追踪、可复盘、可评测。</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{agents.map((agent) => { const Icon = agent.icon; return <Card key={agent.name} className="text-white shadow-xl backdrop-blur"><CardContent><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/10"><Icon className="h-6 w-6 text-cyan-300" /></div><h3 className="text-xl font-semibold">{agent.name}</h3><p className="mt-3 leading-7 text-white/55">{agent.desc}</p></CardContent></Card>; })}</div></section>

      <section id="backend" className="mx-auto max-w-7xl px-6 py-20"><div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-8 shadow-2xl backdrop-blur-xl md:p-10"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-300/10 ring-1 ring-violet-300/20"><Server className="h-6 w-6 text-violet-200" /></div><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">后端编排与执行引擎</h2><p className="mt-5 leading-8 text-white/58">推荐采用 FastAPI + PostgreSQL + Redis + Celery/RQ 的组合，将 Agent 调度、任务状态、工具调用、日志追踪与成本统计统一封装为后端服务。前端只负责创建任务、查看实时进度与下载报告。</p><div className="mt-6 flex flex-wrap gap-2">{["FastAPI","PostgreSQL","Redis Queue","RAG","Structured Output","Token Cost"].map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-sm text-white/62">{tag}</span>)}</div></div><div className="grid gap-4 md:grid-cols-2">{backendModules.map(([Icon,title,desc]) => <div key={title} className="rounded-3xl border border-white/10 bg-black/24 p-5"><Icon className="mb-4 h-6 w-6 text-cyan-300" /><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/50">{desc}</p></div>)}</div></div></div></section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-20"><div className="mb-10 text-center"><div className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">Execution Pipeline</div><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">从需求到结果的自动化链路</h2></div><div className="grid gap-4 lg:grid-cols-5">{workflow.map((item) => <div key={item.step} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-300/20">{item.step}</div><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{item.desc}</p></div>)}</div></section>

      <section id="evidence" className="mx-auto max-w-7xl px-6 py-20"><div className="rounded-[2rem] border border-cyan-300/15 bg-[#081120]/80 p-8 shadow-2xl backdrop-blur md:p-10"><div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"><div><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200"><CheckCircle2 className="h-4 w-4" />Ready for submission</div><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">项目证明材料已整理</h2><p className="mt-5 leading-8 text-white/58">页面用于集中展示 GitHub、在线演示、运行日志、评测报告与账单截图。提交前请使用真实部署地址与经过脱敏的材料，避免暴露 API Key、账号 ID 或完整账单编号。</p></div><div className="grid gap-4 md:grid-cols-2">{evidenceItems.map(([Icon,title,desc]) => <div key={title} className="rounded-3xl border border-white/10 bg-black/25 p-5"><Icon className="mb-4 h-6 w-6 text-violet-200" /><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/50">{desc}</p></div>)}</div></div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8"><div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-center shadow-2xl backdrop-blur md:p-12"><div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-300/10 ring-1 ring-cyan-300/20"><Zap className="h-7 w-7 text-cyan-300" /></div><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">把复杂 AI 任务沉淀为可复用工作流</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-white/58">适用于自动化研发 Demo、批量模型评测、代码与内容生成测试、技术文章生成、RAG 工作流和运营自动化场景。</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Start Workflow</Button><Button size="lg" variant="outline" onClick={() => document.getElementById("evidence")?.scrollIntoView({ behavior: "smooth" })}>View Evidence</Button></div></div></section>
    </main>
  );
}
