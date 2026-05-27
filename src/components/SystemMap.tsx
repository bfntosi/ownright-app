"use client";

import { useMemo } from "react";
import ReactFlow, {
  Background,
  Node,
  Edge,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

export default function SystemMap() {
  const nodes: Node[] = useMemo(
    () => [
      {
        id: "internal",
        position: { x: 250, y: 0 },
        data: { label: "Internal team" },
        style: {
          background: "var(--background-card)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "12px 20px",
          fontSize: "14px",
          fontWeight: 500,
          color: "var(--foreground)",
          width: 140,
          textAlign: "center" as const,
        },
        sourcePosition: "bottom" as any,
        targetPosition: "bottom" as any,
      },
      {
        id: "partners",
        position: { x: 0, y: 150 },
        data: { label: "Partners" },
        style: {
          background: "var(--background-card)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "12px 20px",
          fontSize: "14px",
          fontWeight: 500,
          color: "var(--foreground)",
          width: 120,
          textAlign: "center" as const,
        },
        sourcePosition: "right" as any,
        targetPosition: "right" as any,
      },
      {
        id: "client",
        position: { x: 220, y: 130 },
        data: { label: "The Client" },
        style: {
          background: "var(--foreground)",
          border: "1px solid var(--foreground)",
          borderRadius: "12px",
          padding: "20px 28px",
          fontSize: "16px",
          fontWeight: 600,
          color: "white",
          width: 200,
          textAlign: "center" as const,
        },
        sourcePosition: "top" as any,
        targetPosition: "top" as any,
      },
      {
        id: "data",
        position: { x: 500, y: 150 },
        data: { label: "Data" },
        style: {
          background: "var(--background-card)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "12px 20px",
          fontSize: "14px",
          fontWeight: 500,
          color: "var(--foreground)",
          width: 120,
          textAlign: "center" as const,
        },
        sourcePosition: "left" as any,
        targetPosition: "left" as any,
      },
    ],
    []
  );

  const edges: Edge[] = useMemo(
    () => [
      {
        id: "internal-client",
        source: "internal",
        target: "client",
        type: "straight",
        animated: true,
        style: { stroke: "var(--accent)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "var(--accent)",
        },
      },
      {
        id: "partners-client",
        source: "partners",
        target: "client",
        type: "straight",
        animated: true,
        style: { stroke: "var(--accent)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "var(--accent)",
        },
      },
      {
        id: "data-client",
        source: "data",
        target: "client",
        type: "straight",
        animated: true,
        style: { stroke: "var(--accent)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "var(--accent)",
        },
      },
    ],
    []
  );

  return (
    <div className="w-full h-[400px] rounded-lg border border-[var(--border)]" style={{ background: "var(--background-card)" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="var(--background-subtle)" gap={20} />
      </ReactFlow>
    </div>
  );
}