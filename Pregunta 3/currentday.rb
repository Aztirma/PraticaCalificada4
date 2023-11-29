class CurrentDay
    def initialize(schedule)
      @date = Date.today
      @schedule = schedule
    end
  
    def work_hours
      @schedule.work_hours_for(@date)
    end
  
    def workday?
      !@schedule.holidays.include?(@date)
    end
  end

monthly_schedule = MonthlySchedule.new(2020, 12)

current_day = CurrentDay.new(monthly_schedule)

puts current_day.work_hours
puts current_day.workday?