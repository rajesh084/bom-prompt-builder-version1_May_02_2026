"use client";

import { useMemo, useState } from "react";

const vendors = ["HPE Aruba", "Juniper", "Not Sure"];

const requestTypes = [
  "Access Point / Wi-Fi",
  "Switching",
  "Firewall / Security",
  "ClearPass / NAC",
  "Optics / DAC / Cables",
  "Licensing / Support",
  "Not Sure",
];

export default function Home() {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [vendor, setVendor] = useState("HPE Aruba");
  const [requestType, setRequestType] = useState("Access Point / Wi-Fi");
  const [context, setContext] = useState("");

  function handleFile(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(reader.result as string);
      setFileName(file.name);
    };

    reader.readAsDataURL(file);
  }

  const prompt = useMemo(() => {
    return `You are an expert HPE Aruba and Juniper BOM assistant.

Analyze the attached screenshot of a customer request.

Context selected by Rajesh:
- Vendor: ${vendor}
- Request type: ${requestType}
- Additional context: ${context || "None provided"}

Please provide the following in a clear, structured way:

1. Simple explanation of what this screenshot is about.

2. Is the information adequate to build an accurate BOM for HPE Aruba or Juniper?
   - Answer: Ready / Partially Ready / Not Ready
   - Explain why.

3. List all known requirements from the screenshot.

4. List all missing information needed to build an accurate BOM.

5. Suggest the likely BOM direction:
   - Product category
   - Licensing or subscription requirement
   - Support requirement
   - Accessories such as mounts, optics, DACs, power supplies, or power cords

6. Draft a professional email to the customer:
   - If BOM is ready: explain what will be included.
   - If BOM is not ready: ask for the missing information.

Important BOM checklist:

For HPE Aruba access points:
- AP model or series
- Quantity
- Indoor or outdoor
- Mounting requirement
- PoE availability
- Aruba Central Foundation or Advanced licensing
- Support term: 1, 3, or 5 years
- Correct region, such as RW where applicable

For HPE Aruba switches:
- Port count
- PoE requirement and PoE budget
- Uplink speed
- Copper or fiber
- Optics or DAC requirement
- Power supply requirement
- Aruba Central licensing requirement
- Foundation Care support term

For Juniper switches:
- EX or QFX model family
- Port count
- PoE requirement
- Uplink speed
- Optics or DAC requirement
- Airflow direction, AFI or AFO, if data center switch
- Mist Wired Assurance licensing
- Support term

For Juniper firewalls:
- SRX model
- Throughput or sizing requirement
- HA requirement
- Interface requirement
- Power supply requirement
- Security subscription or support requirement

Response format:

=== BOM ASSISTANT RESPONSE ===

1. Summary:
2. BOM Readiness:
   - Status:
   - Explanation:
3. Known Requirements:
4. Missing Information:
5. Recommended BOM Direction:
6. Draft Email to Customer:
   - Subject:
   - Email Body:
7. Internal Notes for Rajesh:
==============================`;
  }, [vendor, requestType, context]);

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt);
    alert("Prompt copied. Paste it into ChatGPT with your screenshot.");
  }

  async function copyPromptAndOpenChatGPT() {
    await navigator.clipboard.writeText(prompt);
    window.open("https://chatgpt.com", "_blank");
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              BOM Prompt Builder
            </h1>
            <p className="text-sm text-slate-600">
              Free prompt tool for HPE Aruba and Juniper BOM requests
            </p>
          </div>

          <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            No API Required
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[1fr_1.1fr]">
        <section className="space-y-5">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex flex-wrap gap-3">
              <button
                onClick={copyPrompt}
                className="rounded-xl border bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                Copy Prompt
              </button>

              <button
                onClick={() => window.open("https://chatgpt.com", "_blank")}
                className="rounded-xl border bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                Open ChatGPT
              </button>

              <button
                onClick={copyPromptAndOpenChatGPT}
                className="rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800"
              >
                Copy Prompt & Open ChatGPT
              </button>
            </div>

            <h2 className="text-lg font-bold">1. Upload Screenshot</h2>
            <p className="mt-1 text-sm text-slate-600">
              This is only for preview. The app does not send it anywhere.
            </p>

            <input
              className="mt-4 block w-full rounded-xl border bg-white p-3"
              type="file"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) handleFile(file);
              }}
            />

            {imagePreview ? (
              <div className="mt-4 rounded-xl border bg-slate-50 p-3">
                <div className="mb-3 text-sm text-slate-600">
                  Uploaded: <span className="font-semibold">{fileName}</span>
                </div>
                <img
                  src={imagePreview}
                  alt="Screenshot preview"
                  className="max-h-[380px] w-full rounded-lg object-contain"
                />
              </div>
            ) : (
              <div className="mt-4 rounded-xl border border-dashed p-10 text-center text-slate-500">
                Upload a customer email, quote request, BOM screenshot, or chat screenshot.
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold">2. Select Vendor</h2>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {vendors.map((item) => (
                <button
                  key={item}
                  onClick={() => setVendor(item)}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
                    vendor === item
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "bg-white text-slate-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold">3. Select Request Type</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {requestTypes.map((item) => (
                <button
                  key={item}
                  onClick={() => setRequestType(item)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold ${
                    requestType === item
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "bg-white text-slate-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold">4. Additional Context</h2>
            <textarea
              value={context}
              onChange={(event) => setContext(event.target.value)}
              maxLength={1000}
              placeholder="Example: Customer has AP-505 today, wants to expand office Wi-Fi, support term unknown."
              className="mt-3 h-32 w-full rounded-xl border p-3"
            />
            <p className="mt-1 text-right text-xs text-slate-500">
              {context.length}/1000
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-green-800">
                  Your Prompt for ChatGPT
                </h2>
                <p className="text-sm text-green-700">
                  Copy this and paste it into ChatGPT with your screenshot.
                </p>
              </div>

              <button
                onClick={copyPrompt}
                className="rounded-xl bg-green-700 px-4 py-3 text-sm font-bold text-white hover:bg-green-800"
              >
                Copy Prompt
              </button>
            </div>

            <pre className="mt-4 max-h-[620px] overflow-auto whitespace-pre-wrap rounded-xl bg-white p-4 text-sm leading-6 text-slate-800">
              {prompt}
            </pre>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="font-bold text-amber-800">Checklist Reminder</h2>
            <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              <p>✓ Model or series</p>
              <p>✓ Quantity</p>
              <p>✓ Indoor or outdoor</p>
              <p>✓ PoE availability</p>
              <p>✓ Licensing</p>
              <p>✓ Support term</p>
              <p>✓ Mounts or accessories</p>
              <p>✓ Optics, DACs, or power</p>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-800">
            After copying the prompt, open ChatGPT, attach the same screenshot, paste the prompt, and send. You will get the explanation, BOM readiness, missing details, and customer email draft.
          </div>
        </section>
      </div>
    </main>
  );
}