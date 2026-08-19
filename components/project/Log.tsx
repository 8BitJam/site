import type { DebugType } from "@/types/project";

function Log({ debug }: { debug: DebugType[] }) {
  return (
    <div className="flex flex-col gap-y-1 font-jersey text-gray-300 text-2xl w-full">
      <div className="flex gap-x-3">
        <div className="flex-3">Description</div>
        <div className="flex-1">Agent</div>
        <div className="flex-1">Time</div>
      </div>
      {debug.length > 0 ? (
        debug.map((item, i) => (
          <div key={i} className="flex gap-x-3">
            <div className="flex-3">{item.description}</div>
            <div className="flex-1">{item.agent}</div>
            <div className="flex-1" title={item.createdAt.toISOString()}>
              {item.createdAt.getHours().toString().padStart(2, "0")}:
              {item.createdAt.getMinutes().toString().padStart(2, "0")}
            </div>
          </div>
        ))
      ) : (
        <div className="py-2 text-xl text-center">No entries logged</div>
      )}
    </div>
  );
}

export default Log;
