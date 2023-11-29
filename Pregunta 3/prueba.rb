require 'rspec'
require 'currentday.rb'

Describe CurrentDay do
    before do
        Date.singleton_class.class_eval do
        alias_method :_today, :today
        define_method(:today) { Date.new(2020, 12, 16) }
        end
    end
    
    after do
        Date.singleton_class.class_eval do
        alias_method :today, :_today
        remove_method :_today
        end
    end
end