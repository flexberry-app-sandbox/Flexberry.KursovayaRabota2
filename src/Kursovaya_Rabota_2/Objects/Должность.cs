﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya_Rabota_2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Должность.
    /// </summary>
    // *** Start programmer edit section *** (Должность CustomAttributes)

    // *** End programmer edit section *** (Должность CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник Должности")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДолжностьE", new string[] {
            "Наименование as \'Должность\'"})]
    [View("ДолжностьL", new string[] {
            "Наименование as \'Должность\'"})]
    public class Должность : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (Должность CustomMembers)

        // *** End programmer edit section *** (Должность CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Должность.Наименование CustomAttributes)

        // *** End programmer edit section *** (Должность.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Должность.Наименование Get start)

                // *** End programmer edit section *** (Должность.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Должность.Наименование Get end)

                // *** End programmer edit section *** (Должность.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должность.Наименование Set start)

                // *** End programmer edit section *** (Должность.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Должность.Наименование Set end)

                // *** End programmer edit section *** (Должность.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДолжностьE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностьE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностьE", typeof(IIS.Kursovaya_Rabota_2.Должность));
                }
            }
            
            /// <summary>
            /// "ДолжностьL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностьL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностьL", typeof(IIS.Kursovaya_Rabota_2.Должность));
                }
            }
        }
    }
}
