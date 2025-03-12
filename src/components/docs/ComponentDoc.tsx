import React from "react";
import { cn } from "@/lib/utils";

interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: string;
}

interface ComponentDocProps {
  title: string;
  description: string;
  usage: string;
  props?: PropDefinition[];
  examples?: {
    title: string;
    code: string;
    preview: React.ReactNode;
  }[];
  className?: string;
}

const ComponentDoc: React.FC<ComponentDocProps> = ({
  title,
  description,
  usage,
  props = [],
  examples = [],
  className,
}) => {
  return (
    <div className={cn("space-y-8", className)}>
      <div>
        <h1 className="text-3xl font-serif font-bold text-uniworld-blue mb-2">
          {title}
        </h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Usage</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{usage}</code>
        </pre>
      </div>

      {props.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Props</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Default
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Required
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.map((prop) => (
                  <tr key={prop.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-uniworld-blue">
                      {prop.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <code>{prop.type}</code>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {prop.defaultValue ? (
                        <code>{prop.defaultValue}</code>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {prop.required ? "Yes" : "No"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {prop.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {examples.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Examples</h2>
          <div className="space-y-6">
            {examples.map((example, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md overflow-hidden"
              >
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h3 className="font-medium">{example.title}</h3>
                </div>
                <div className="p-4 bg-white">{example.preview}</div>
                <div className="border-t border-gray-200">
                  <pre className="bg-gray-100 p-4 m-0 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentDoc; 