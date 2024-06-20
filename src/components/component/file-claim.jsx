
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FileClaim() {
  return (
    (<main
      key="1"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 px-4 py-8 dark:bg-gray-950">
      <div
        className="mx-auto w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="mb-6 space-y-2">
          <h1 className="text-3xl font-bold">File a Claim</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Submit a first notice of loss (EFNOL) for your damaged vehicle.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="incident-date">Incident Date</Label>
              <Input id="incident-date" required type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="incident-location">Incident Location</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Enter location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="New York">New York</SelectItem>
                    <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                    <SelectItem value="Chicago">Chicago</SelectItem>
                    <SelectItem value="Houston">Houston</SelectItem>
                    <SelectItem value="Phoenix">Phoenix</SelectItem>
                    <SelectItem value="Philadelphia">Philadelphia</SelectItem>
                    <SelectItem value="San Antonio">San Antonio</SelectItem>
                    <SelectItem value="San Diego">San Diego</SelectItem>
                    <SelectItem value="Dallas">Dallas</SelectItem>
                    <SelectItem value="San Jose">San Jose</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="damage-description">Damage Description</Label>
            <Textarea
              className="min-h-[100px]"
              id="damage-description"
              placeholder="Describe the damage to your vehicle"
              required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="photos">Upload Photos</Label>
            <div className="grid grid-cols-3 gap-4">
              <Input id="photos" multiple required type="file" />
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="relative group">
                  <img
                    alt="Uploaded Photo"
                    className="rounded-lg object-cover w-full aspect-square"
                    height={200}
                    src="/placeholder.svg"
                    width={200} />
                  <Button
                    className="absolute top-2 right-2 bg-gray-900/50 text-white hover:bg-gray-900 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50"
                    size="icon"
                    variant="ghost">
                    <XIcon className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
                <div className="relative group">
                  <img
                    alt="Uploaded Photo"
                    className="rounded-lg object-cover w-full aspect-square"
                    height={200}
                    src="/placeholder.svg"
                    width={200} />
                  <Button
                    className="absolute top-2 right-2 bg-gray-900/50 text-white hover:bg-gray-900 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50"
                    size="icon"
                    variant="ghost">
                    <XIcon className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Button className="w-full" type="submit">
            Submit Claim
          </Button>
        </form>
      </div>
      <div className="mt-8 w-full max-w-3xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Claim Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">Claim Submitted</span>
              </div>
              <Badge className="rounded-full px-3 py-1" variant="outline">
                Pending
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Claim Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CalendarCheckIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <div className="font-medium">Claim Received</div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Your claim has been received and is being processed.
                  </p>
                  <time className="text-sm text-gray-500 dark:text-gray-400">May 21, 2024</time>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TruckIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <div className="font-medium">Adjuster Assigned</div>
                  <p className="text-gray-500 dark:text-gray-400">An adjuster has been assigned to your claim.</p>
                  <time className="text-sm text-gray-500 dark:text-gray-400">May 22, 2024</time>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <WrenchIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <div className="font-medium">Repair Estimate Completed</div>
                  <p className="text-gray-500 dark:text-gray-400">
                    The repair estimate for your vehicle has been completed.
                  </p>
                  <time className="text-sm text-gray-500 dark:text-gray-400">May 24, 2024</time>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>)
  );
}

function CalendarCheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>)
  );
}


function ClockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>)
  );
}


function TruckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path
        d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>)
  );
}


function WrenchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
