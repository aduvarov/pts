import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor'
import { ConsoleLogger } from './out/cosole-logger/console-logger'

export class App {
    async run() {
        new FfmpegExecutor(ConsoleLogger.getInstance()).execute()
    }
}

const app = new App()
app.run()
